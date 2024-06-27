export const clickDropDownMenu = (event) => {
    try {
        let dropBtn = event.target;
        if (!dropBtn || !dropBtn.parentNode || !dropBtn.parentNode.parentNode) {
            console.error('Invalid event target or parent node');
            return;
        }
        let parentDivDropdown = dropBtn.parentNode.parentNode;
        let divDropDownContent = parentDivDropdown.querySelector('.dropdown-content');

        if (divDropDownContent.classList.contains('showMenuElement')) {
            console.log('divDropDownContent content has the class showMenuElement');
            divDropDownContent.classList.remove('showMenuElement');
        } else {
            console.log('divDropDownContent content does not have the class showMenuElement');
            divDropDownContent.classList.add('showMenuElement');
        }
    } catch (error) {
        console.error('Error in clickDropDownMenu function:', error);
        // Handle or log the error as needed
    }
};
