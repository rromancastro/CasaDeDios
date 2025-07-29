import Image from "next/image";

export const FirstSection = () => {
    return (
        <section id="firstSection">
            <Image id="firstSectionImage" src="/logo.png" alt="First Section Logo" width={500} height={500} />
            <h1 id="firstSectionTitle">CASA DE DIOS</h1>
            <p id="firstSectionP">SIEMPRE SOS</p>
            <h2 id="firstSectionH2">Bienvenido</h2>
        </section>
    );
};