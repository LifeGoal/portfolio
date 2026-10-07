const About = () => {
    return (
        <section id="om" className="flex flex-col items-center justify-center px-6 py-16 sm:py-24 border-b border-border/60">
            <div className="mx-auto max-w-6xl w-full flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl text-center font-bold text-white">
                    Om <span className="text-primary">mig</span>
                </h2>
                <div className="flex flex-col gap-4 text-base sm:text-lg text-muted-foreground">
                    <p>
                        Jag är en passionerad fullstackutvecklare under utbildning.
                        Med flera års erfarenhet av ideellt utvecklingsarbete inom FiveM-communityt har jag utvecklat en stark förmåga att skapa användarvänliga digitala lösningar för alla.
                        Mina tidigare kunskaper är självlärda och jag har en stark vilja att fortsätta utvecklas och lära mig nya teknologier inom branschen.
                    </p>
                    <p>
                        Självklart är jag inte färdigutvecklad, men jag är motiverad att ta nästa steg och få in en fot i branschen som utvecklare, på riktigt.
                        Därför söker jag nu en LIA-plats eller en första junior-roll där jag kan bidra med det har jag lärt mig hittills, samtidigt som jag fortsätter att växa och utvecklas som utvecklare med er.
                        Låter det intressant? Hör av dig så kan vi ta en pratstund!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;