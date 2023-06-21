import React from 'react'
import { MenuList } from "../helpers/MenuList";
import { MenuListKebab } from "../helpers/MenuListKebab";
import { MenuListKebab2} from "../helpers/MenuListKebab2";
import { MenuListKyckling } from "../helpers/MenuListKyckling";
import { MenuListFlask } from "../helpers/MenuListFlask";
import { MenuListOx } from "../helpers/MenuListOx";
import { MenuListItalia } from "../helpers/MenuListItalia";
import { MenuListMex } from "../helpers/MenuListMex";
import { MenuListInbak } from "../helpers/MenuListInbak";
import { MenuListHalvInbak } from "../helpers/MenuListHalvInbak";
import { MenuListRulle } from "../helpers/MenuListRulle";
import { MenuListKebab3 } from "../helpers/MenuListKebab3";
import { MenuListPita } from "../helpers/MenuListPita";
import { MenuListSallad } from "../helpers/MenuListSallad";
import { MenuListSalladsbar } from "../helpers/MenuListSalladsbar";
import MenuItem from "../components/MenuItem";
import MenuItem2 from "../components/MenuItem2";
import MenuItem3 from "../components/MenuItem3";
import MenuItem4 from "../components/MenuItem4";
import MenuItem5 from "../components/MenuItem5";
import "../styles/Menu.css";
import { MenuListBurgare } from '../helpers/MenuListBurgare';
import { MenuListSas } from '../helpers/MenuListSas';

function Menu() {
  return (
    
    <div className="menu">
        <h1 className="menuTitle">Vår meny</h1>
        <h2 className="menuTitleStand">Standardpizzor</h2>
        <div className="menuList">
            {MenuList.map((menuItem, key) => { 
                return (
            <MenuItem 
            key={key}
            idList={menuItem.idList}
            name={menuItem.name} 
            description={menuItem.description} 
            price={menuItem.price}
            kat={menuItem.kat} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Kebabpizzor</h2>
        <h3 className="menuTitleDesc">Vi bygger vårat egna kebabspett!</h3>
        <div className="menuList">
            {MenuListKebab.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Nötkebabpizzor</h2>
        <div className="menuList">
            {MenuListKebab2.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Kycklingpizzor</h2>
        <div className="menuList">
            {MenuListKyckling.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Fläskfilépizzor</h2>
        <div className="menuList">
            {MenuListFlask.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Oxfilépizzor</h2>
        <div className="menuList">
            {MenuListOx.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Italienska pizzor</h2>
        <div className="menuList">
            {MenuListItalia.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Mexikanska pizzor</h2>
        <div className="menuList">
            {MenuListMex.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Inbakade pizzor</h2>
        <div className="menuList">
            {MenuListInbak.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Halvt Inbakade pizzor</h2>
        <div className="menuList">
            {MenuListHalvInbak.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    idList={menuItem.idList}
                    name={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Tunnbrödsrulle</h2>
        <h3 className="menuTitleDesc">I alla rullar igår Isbergssallad, Tomat, Gurka, Lök & Sås</h3>
        <div className="menuList">
            {MenuListRulle.map((menuItem2, key) => {
                return (
                    <MenuItem2
                    key={key}
                    name={menuItem2.name}
                    description={menuItem2.description}
                    price={menuItem2.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Kebab</h2>
        <h3 className="menuTitleDesc">I alla ingår Isbergssallad, Tomat, Gurka, Lök, Feferoni</h3>
        <div className="menuList">
            {MenuListKebab3.map((menuItem2, key) => {
                return (
                    <MenuItem2
                    key={key}
                    name={menuItem2.name}
                    description={menuItem2.description}
                    price={menuItem2.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Pita</h2>
        <h3 className="menuTitleDesc">I alla ingår Isbergssallad, Tomat, Gurka, Lök, Kebabsås</h3>
        <div className="menuList">
            {MenuListPita.map((menuItem3, key) => {
                return (
                    <MenuItem3
                    key={key}
                    name={menuItem3.name}
                    price={menuItem3.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Sallad</h2>
        <h3 className="menuTitleDesc">I alla ingår Isbergssallad, Majs, Tomat, Gurka, Färskt Bröd, Smör, Valfri Sås</h3>
        <div className="menuList">
            {MenuListSallad.map((menuItem2, key) => {
                return (
                    <MenuItem2
                    key={key}
                    name={menuItem2.name}
                    description={menuItem2.description}
                    price={menuItem2.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Viking Salladsbar 130:-</h2>
        <h3 className="menuTitleDesc">I alla sallader ingår sallad, tomat, gurka, majs och färskt bröd.</h3>
        <h3 className="menuTitleDesc">Välj upp till 5 ingredienser och en dressing.</h3>
        <div className="menuList2">
            {MenuListSalladsbar.map((menuItem4, key) => {
                return (
                    <MenuItem4
                    key={key}
                    name={menuItem4.name} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Hemmagjorda Högrevsburgare 200g</h2>
        <h3 className="menuTitleDesc">Tillbehör hamburgare: Ost +10:-, Bacon +10:-</h3>
        <div className="menuList">
            {MenuListBurgare.map((menuItem2, key) => {
                return (
                    <MenuItem2
                    key={key}
                    name={menuItem2.name}
                    description={menuItem2.description}
                    price={menuItem2.price} />
                )
            })}
        </div>
        <h2 className="menuTitleStand">Våra såser</h2>
        <div className="menuList3">
            {MenuListSas.map((menuItem5, key) => {
                return (
                    <MenuItem5
                    key={key}
                    name={menuItem5.name} />
                )
            })}
        </div>
    </div>
    
  )
}

export default Menu