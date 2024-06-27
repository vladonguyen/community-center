import { v4 as uuid } from "uuid"

export const mapMainMenuItems = (menuItems) => {
    // console.log("menuItems!!!:", menuItems[1])
   return menuItems.map (menuItem => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.label,
   

    subMenuItems: (menuItem.items || []).map((subMenuItem => ({
        id: uuid(),
        destination: subMenuItem.destination?.uri,
        label: subMenuItem.label,
        alternativeUrl: subMenuItem.alternativeUrl?.url ?? undefined,
        alternativeUrlTarget: subMenuItem.alternativeUrl?.target ?? undefined,
      
    })))
   }))
    


}