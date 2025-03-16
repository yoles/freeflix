import puppeteer, {Browser, Page} from "puppeteer";
import { MovieTorrent } from "../entities/movie.entity";
import { ITorrentScraper } from "../ports/torrent.repository";
import { log } from "console";

export class X1337TorrentScraper implements ITorrentScraper {
  private readonly BASE_URL = 'https://1337x.to/search';

  async searchTorrents(movieTitle: string): Promise<MovieTorrent[]> {
    let browser: Browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROMIUM_PATH,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const page = await browser.newPage();
      await page.goto(`${this.BASE_URL}/${movieTitle}/1/`);

      const torrents = await this.extractTorrentLinks(page);
      return torrents;
    } catch (error) {
      throw new Error(`Scraping failed: ${error.message}`);
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }

  private async extractTorrentLinks(page: Page): Promise<MovieTorrent[]> {
    const torrents = await page.evaluate(() => {
      const items = document.querySelectorAll('table.table-list tbody tr');
      return Array.from(items).map(item => {
        let links = Array.from(item.querySelectorAll('td.name a')).filter(
          (link) => (
            link?.getAttribute('href')?.includes('/torrent/') && 
            !link?.getAttribute('href')?.toLowerCase().includes('porno')
          )
        );
        const url = links.length > 0 ? links[0].getAttribute('href') : '';

        const sizeElement = item.querySelector('td.size');
        const size = sizeElement ? 
          Array.from(sizeElement.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent?.trim())
            .join('') || ''
          : '';

        return {
          title: item.querySelector('td.name')?.textContent?.trim() || '',
          url,
          size,
          seeds: parseInt(item.querySelector('td.seeds')?.textContent || '0'),
          leeches: parseInt(item.querySelector('td.leeches')?.textContent || '0')
        };
      });
    });
    return torrents.map(
      torrent => new MovieTorrent({...torrent, url: this.BASE_URL + torrent.url})
    );
  }
}