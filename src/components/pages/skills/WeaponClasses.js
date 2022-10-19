import SkillCard from "../../cards/SkillCard";
import GridContainer from "../../layouts/GridContainer";
import { DATA } from "../../../config/Config";
import { useEffect, useState } from "react";
import SkillDataCard from "../../cards/SkillDataCard";
import { Link } from "react-router-dom";

const WeaponClasses = () => {
  const [currentClass, setCurrentClass] = useState(
    DATA.skills.weapon_classes[0]
  );
  const [weaponClasses, setWeaponClasses] = useState(null);
  const [weaponData, setWeaponData] = useState(null);

  const onClickHandler = (e) => {
      console.log(e)
    setCurrentClass(
      DATA.skills.weapon_classes.find(
        (weapon) => weapon.title === e.target.innerText
      )
    );
  };

  useEffect(() => {
    setWeaponClasses(DATA.skills.weapon_classes.map((classes) => {
      return (
        <SkillCard
          active={classes.title === currentClass.title ? "active-card" : ""}
          key={classes.title}
          title={classes.title}
          onClick={onClickHandler}
        />
      )
    }))

    setWeaponData(
      <SkillDataCard
        tiers={currentClass.tiers}
      />
    )
  }, [currentClass]);


  return (
    <GridContainer>
      <div className="cell 12">
        <div className="card main-card">
            <Link to="/skills" className="button back-btn">Back</Link>
          <div className="card-section">
            <div className="text-center">
            <h1>{currentClass.title}</h1>
            <p>{currentClass.description}</p>
            </div>
            <div className="divider" />
            <div className="grid-x grid-padding-x">
              <div className="cell large-4">{weaponClasses}</div>
              <div className="cell large-8">{weaponData}</div>
            </div>
          </div>
        </div>
      </div>
    </GridContainer>
  );
};

export default WeaponClasses;
