
# Cover Card Script

Allows functionality to have an element slide in/out of the container covering any content underneath whilst retaining the DOM elements in place.

## Usage

 - Give the parent element a class of .cover-card-holder.
 - Give the card a class of .cover-card.
 - Wrap the cover-card's child content in a class of
   .cover-card-content.
 - If the card needs to cover any content underneath it, give the
   covered container a class of .cover-card-under-content.

## Example

    <div class="cover-card-holder">
	    <div class="cover-card cover-card-slide-right">
			<div class="cover-card-content">
				//card content here
			</div>
		</div>
	    <div class="cover-card-under-content">
			//This will be convered on show
		</div>
	</div>

## Public Methods

    innovedCoverCard.showCard();
    innovedCoverCard.hideCard();
	innovedCoverCard.positionDropdown(); //remove overflow hidden when dropdown is activated
	innovedCoverCard.setUnderContentHeight(); //sets the height of the content under the cover card to match for smooth transitions

## Current Usage in Application

    
For examples see: http://ccf.local.vm/ems/cf/config/assessment-config and http://ccf.local.vm/ems/cf/config/assessment-sets.

### Example 1: Assessment Config.

On this page there is one cover card used to hold a form, for either creating a new configuration or editing an existing one.

From the configuration create a new configuration. This list should fade slightly and loading icon should appear. After a couple of second the cover card should slide in from the left, covering the list completely. The white background of the card should also adjust it's height to automatically fit the form content within.

You should be able to close the cover card by either clicking the 'back button' (top right), or the 'cancel button' (bottom left). The cover card should then slide out of the screen to the right completely, revealing the list under it again.

The cover card should always automatically adjust it's height depending on the content within it. To test this, within the configuration form, select an option from the 'assessment' dropdown. This should reveal hidden content, and the cover card should adjust it's height and background to fit the new content within it. The same goes for content removed.

### Example 2: Assessment Sets

On this page there is two cover card instances. One to display content for viewing a set, and one to display content for editing the set. *(Note: there is actually only one cover card div on the page. See \*1 below.)*

Click on an assessment set from the left, the page should load and the cover card should slide in showing the set's information.

You can then click 'Edit assessment set' near the top to load in the second cover card instance. Once clicking this button the first cover card will slide out, revealing the list (in a loading state!), then slide back in to display the set's editable form content. 

\*1 *(The reason the first card must slide out before the second card slides in is because there is actually just once cover card being used here, but it loads in separate content depending on what you choose. The script is currently only able to handle one .cover-card class on a page at a time, however it can be possible to update in the future if necessary.)*

Closing the "second" cover card will reveal the loading list, then show the initial cover card you were last on.