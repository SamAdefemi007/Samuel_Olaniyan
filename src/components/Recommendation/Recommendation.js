import RecommendCard from "./RecommendCard";

const Recommendation = () => {
  return (
    <div>
      <h1 className="md:text-3xl text-xl text-center mb-8 md:mb-16">
        Recommendations
      </h1>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <RecommendCard
          name="Yinka Yomi-Tokosi, CFA"
          jobTitle="Finance|Treasury|Global Markets"
          description="I have worked alongside Samuel for almost three years. During this period, Samuel has been very conscientious and dedicated to his work. He is knowledgeable, diligent and a team-player.In all roles undertaken, he displayed a willingness to learn; consistently taking on additional responsibilities. He has a passion for learning a wide range of subjects and applying his learnings to his jobs. He always has a positive attitude and a desire to produce quality work."
        />
        <RecommendCard
          name="Oluwagbemiga Majekodunmi"
          jobTitle="Senior Application Support Analyst|ITIL V4 "
          description="One of the most (if not the most) resourceful professional(s) I have met. He is one of those naturally talented individuals with extreme focus and intelligence that can navigate through any problem and solve it with ease. He has my utmost recommendation."
        />
        <RecommendCard
          name="Tobi Abiola Babatunde, ACA ACIB"
          jobTitle="Data Scientist"
          description="Samuel is one of the most committed and intelligent people I have had the privileged to study with. He is creative, passionate and very focused. He is also a great team player and communicate with others easily. I enjoyed our studies together."
        />
      </div>
      <hr className="w-full border-2 border-surface my-16"></hr>
    </div>
  );
};

export default Recommendation;
