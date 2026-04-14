import "./ExploreMenu.css";
import { menu_list } from "../../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-test">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt laborum
        atque laboriosam eos architecto? Nesciunt, quam? Voluptatum accusantium
        veritatis nostrum repellat cupiditate sed dolorem, tempora cumque at
        facere magni error!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={
                  category === item.menu_name ? "active" : item.menu_name
                }
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
