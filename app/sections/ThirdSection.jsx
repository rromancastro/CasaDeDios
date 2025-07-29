"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer";

export const ThirdSection = () => {


    const [img1Ref, img1InView] = useInView({ threshold: 1 });
    const [img2Ref, img2InView] = useInView({ threshold: 1 });
    const [img3Ref, img3InView] = useInView({ threshold: 1 });


    return (
        <section id="thirdSection">
            <h3>CASA DE DIOS</h3>
            <h2>KIDS</h2>
            <p id="thirdSectionVersiculo">Pero Jesús dijo: Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos.</p>
            <p id="thirdSectionVersiculoInfo">MATEO 19:14</p>
            <div className="secondSectionDataContainer">
                <h3>Direccion</h3>
                <p>Riobamba 1160 - San Luis</p>
            </div>
            <div className="secondSectionDataContainer">
                <h3>Horario</h3>
                <p>21:00</p>
            </div>
            <div id="thirdSectionImages">
                <Image ref={img1Ref} className="thirdSectionImage" src="/images/kids1.jpg" alt="Third Section Image" width={500} height={500} style={{opacity: img1InView ? 1 : 0,left: '9%', top: 0}}/>
                <Image ref={img2Ref} className="thirdSectionImage" src="/images/kids2.jpg" alt="Third Section Image" width={500} height={500} style={{opacity: img2InView ? 1 : 0,left: '18%', top: '25%'}}/>
                <Image ref={img3Ref} className="thirdSectionImage" src="/images/kids3.jpg" alt="Third Section Image" width={500} height={500} style={{opacity: img3InView ? 1 : 0,left: '27%', top: '50%'}}/>
            </div>
        </section>
    )
}