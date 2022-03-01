import Banner from "../components/banner/Banner";

export default function Home() {
    return (
        <div>
            <Banner imageURL="https://i.pinimg.com/originals/88/1e/97/881e975af06ff67857544c7b64e65cbc.gif" subtitle="Taking conversations to the moon! 🚀" title="S K Y L I X" />

            {/* <h1 style={{
                textAlign: "center",
            }}>S K Y L I X</h1>

            <p style={{
                textAlign: "center",
            }}>
                Taking conversations to the moon! 🚀
            </p> */}

            <div style={{
                padding: "20px"
            }}>
                <button onClick={() => {
                    window.location.href = "/tnarr";
                }}>T N A R A</button>
            </div>

            <h3>Skylix isn{ "'" }t ready yet!</h3>
            <p>Skylix is still in dev, check out our github for more info like our discord server, etc...</p>
        </div>
    );
}
