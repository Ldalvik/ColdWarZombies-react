import CategoryCard from "../cards/CategoryCard";
import GridContainer from "../layouts/GridContainer";

const HomePage = () => {
  const cardCategories = [
    {
      title: "Skills",
      description: "View all weapon classes, field upgrades, perks, and ammo mods.",
      link: "/skills"
    },
    {
      title: "Weapons",
      description: "View all available weapons, including their stats and attachments.",
      link: "/weapons"
    }
  ]

  const cards = cardCategories.map((card) => {
    return <CategoryCard
      title={card.title}
      description={card.description}
      link={card.link}
    />
  })

  return (
    <GridContainer>
      <div className="cell 12">
        <div className="card main-card">
          <div className="card-section">
            <div className="text-center">
              <h1>ColdWar Zombies</h1>
            </div>
            <div className="divider" />
            <div className="grid-x grid-padding-x small-up-2 medium-up-4 large-up-5 align-center">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </GridContainer>
  );
};

export default HomePage;
