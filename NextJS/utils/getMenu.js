import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async (variable1, variable2,variable3) => {
  // console.log("VARIABLES: ", variable1, variable2,variable3)
  const params = {
    query: `
        query Menuquery {    
          acfOptions${variable1} {
            mainMenu${variable2} {
              callToActionButton {
                label
                destination{
                  ...on Page{
                    uri
                  }
                }   
              }
              menuItems${variable3} {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
                alternativeUrl {
            target
            title
            url
          }
                  destination{
                    ... on Page {
                      uri
                    }
                  }
                     
                  label
                }
              }
              
            }
          }
    
          
        }
        `
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(params)
  });
  const { data } = await response.json();
  // console.log("this is data", data);

  if (variable1 == "MainMenu") {
    // console.log("NEWCONSOLELOG: ", data.acfOptionsMainMenu.mainMenu.menuItems[1].items[3].alternativeUrl.url);
    
    return {

      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems)  }
  }else if (variable1 == "FooterMenu1") {
    return {

      mainMenuItems: mapMainMenuItems(data.acfOptionsFooterMenu1.mainMenuFooterMenu1.menuItems1)
    }
  }else if (variable1 == "FooterMenu2") {
    return {

      mainMenuItems: mapMainMenuItems(data.acfOptionsFooterMenu2.mainMenuFooterMenu2.menuItems2)
    }
  }else if (variable1 == "FooterMenu3") {
    return {

      mainMenuItems: mapMainMenuItems(data.acfOptionsFooterMenu3.mainMenuFooterMenu3.menuItems3)
    }
  }


}