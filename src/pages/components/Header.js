
export default function Header() {
    return (
        <div id="header">
            <a href="https://github.com/jorgenlt/meme-generator" target="_blank" rel="norefferer">
                <i class="fa-brands fa-github"></i>
            </a>
            <div id="memeface">
                <img
                    src="troll-face.png"
                    alt="troll face"
                    height="30px"
                />
                <h1>Meme Generator</h1>
            </div>
            <div style={{marginRight: "25px"}}></div>
        </div>
    )
}