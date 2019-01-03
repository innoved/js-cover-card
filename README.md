# Cover Card Script

Allows functionality to have an element slide in/out of the container covering any content underneath whilst retaining the DOM elements in place.

## Usage

 - Give the parent element a class of .cover-card-holder.
 - Give the card a class of .cover-card.
 - Wrap the cover-card's child content in a class of
   .cover-card-content.
 - If the card needs to cover any content underneath it, give the
   covered container a class of .cover-card-under-content.

## Public Methods

    innovedCoverCard.showCard();
    innovedCoverCard.hideCard();
	innovedCoverCard.positionDropdown(); //remove overflow hidden when dropdown is activated
	innovedCoverCard.setUnderContentHeight(); //sets the height of the content under the cover card to match for smooth transitions
