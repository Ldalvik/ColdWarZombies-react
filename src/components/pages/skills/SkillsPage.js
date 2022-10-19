import CategoryCard from "../../cards/CategoryCard";
import GridContainer from "../../layouts/GridContainer";

const SkillsPage = () => {
  const cardCategories = [
    {
      title: "Weapon Classes",
      description: "View all available weapons classes, along with its upgrades and their cost.",
      link: "/weapon_classes",
    },
    {
      title: "Field Upgrades",
      description: "View all available field upgrades, along with its upgrades and their cost.",
      link: "/field_upgrades",
    },
    {
      title: "Perks",
      description: "View all available perks, along with its upgrades and their cost.",
      link: "/perks",
    },
    {
      title: "Ammo Mods",
      description: "View all available ammo mods, along with its upgrades and their cost.",
      link: "/ammo_mods",
    },
  ];

  const cards = cardCategories.map((card) => {
    return (
      <CategoryCard
        title={card.title}
        description={card.description}
        link={card.link}
      />
    );
  });

  return (
    <GridContainer>
      <div className="cell 12">
        <div className="card main-card">
          <div className="card-section">
            <div className="text-center">
              <h1>Skills</h1>
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

export default SkillsPage;
