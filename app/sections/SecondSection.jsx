"use client"
import { useInView } from "react-intersection-observer";
import { NavBar } from "../components";

export const SecondSection = () => {

    //logica navbar
    const { ref, inView } = useInView({
        threshold: .50,
        triggerOnce: true,
    });

    return (
        <section ref={ref} id="secondSection">
            <NavBar opacity={inView ? 1 : 0} />
            <h2 id="secondSectionH2">NUESTRAS<br />REUNIONES<br />LOS<br />SABADOS</h2>
            <div className="secondSectionDataContainer">
                <h3>Direccion</h3>
                <p>Riobamba 1160 - San Luis</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Horario de reuniones</h3>
                <p>20:30</p>
            </div>
            <h3 id="secondSectionH3">CASAS<br />DE<br />ORACIÓN</h3>
            <div className="secondSectionDataContainer">
                <h3>Lideres</h3>
                <p>Leandro y Andrea</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Direccion</h3>
                <p>Riobamba 1160 - San Luis</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Horario de reuniones</h3>
                <p>20:00</p>
            </div>
            <div className="secondSectionDataContainer" style={{marginTop: 30}}>
                <h3>Lideres</h3>
                <p>Leandro y Andrea</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Direccion</h3>
                <p>Riobamba 1160 - San Luis</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Horario de reuniones</h3>
                <p>20:00</p>
            </div>
            <div className="secondSectionDataContainer" style={{marginTop: 30}}>
                <h3>Lideres</h3>
                <p>Leandro y Andrea</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Direccion</h3>
                <p>Riobamba 1160 - San Luis</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Horario de reuniones</h3>
                <p>20:00</p>
            </div>
        </section>
    )
}