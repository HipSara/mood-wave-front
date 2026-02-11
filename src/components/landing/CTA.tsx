import FadeContent from "@/components/FadeContent";

export const CTA = () => {
  return (
    <div className="py-32">
      <FadeContent
        duration={1}
        blur={true}
        threshold={0.2}
        className="text-center"
      >
        <h2 className="text-4xl text center text-white mb-12">
          ¿Listo para descubrir tu MoodWave?
        </h2>
      </FadeContent>

      <FadeContent
        duration={1.2}
        delay={0.3}
        className="text-center"
      >
        <p className="text-lg text center text-gray-200">
          Únete a nuestra comunidad y siente la vibra de tu estado de ánimo.
        </p>
      </FadeContent>
    </div>
  );
};