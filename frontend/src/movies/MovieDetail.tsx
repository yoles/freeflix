import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./styles/index.css";

type Movie = {
    title: string;
    poster_path: string;
    genres?: string[];
    overview?: string;
    duration?: string;
}

type Link = {
    name: string;
    link: string;
}

type Torrent = {
    magnet: string;
    filename: string;
    linkURL: string;
    linkName: string;
}

type File = {
    name: string;
    length: number,
}

export function MovieDetail() {
    const url = "http://localhost:3000";
    const {movieId} = useParams()
    const [movie, setMovie] = useState<Movie>();
    const [links, setLinks] = useState<Link[]>([]);
    const [torrent, setTorrent] = useState<Torrent>({
        magnet: "",
        linkURL: "",
        linkName: "",
        filename: "",
    });
    const [files, setFiles] = useState<File[]>([]);;
    const [selectedFile, setSelectedFile] = useState("");

    useEffect(() => {
        fetch(`${url}/movie/detail/${movieId}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data.movie);
                setLinks(data.links);
            });
    }, []);

    const handleClick = async (link: Link) => {
        let response = await fetch(
            `${url}/get/magnet/`,
            {
                body: JSON.stringify({link: link.link}),
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        let data = await response.json();
        setTorrent((oldTorrent) => ({
            ...oldTorrent, magnet: data.magnet, linkName: link.name, linkURL: link.link
        }));

        const magnet = data.magnet
        response = await fetch(`${url}/metadata/${encodeURIComponent(magnet)}`);
        data = await response.json();
        console.log("[DEBUG] Response: ", data);
        setFiles(data);
    }

    // console.log("[DEBUG] Torrent: ", torrent);
    return (
        <>
            <div className="movie-detail">
                <h1>{movie?.title}</h1>
                <p style={{fontFamily: "Arial"}}>{movie?.overview}</p>
            </div>

            <div>
                <h1>Liens</h1>
                {
                    !torrent.magnet && links?.map((link) => (
                        <p className="link" key={link.link+link.name} onClick={() => handleClick(link)}>
                            {link.name}
                        </p>
                    ))
                }
                {
                    torrent.magnet && (
                        <>
                            <p className="link">
                                {torrent.linkName}
                            </p>
                            <div>
                                { files?.map((file: File) => (
                                    <p key={file.name+file.length} onClick={() => setSelectedFile(file.name)}>{file.name}</p>
                                ))}
                            </div>
                            <div>
                                {
                                    selectedFile && (
                                        <video controls
                                          src={`http://localhost:3000/streamfile/${encodeURIComponent(torrent.magnet)}/${selectedFile}`}>
                                        </video>
                                    )
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}
