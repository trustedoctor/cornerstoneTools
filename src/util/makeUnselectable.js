/**
 * A helper function to make an element (and its content) being non selectable.
 * @param element {HTMLElement} The element to make unselectable
 * @param ignorePointerEvents {Boolean} true to make this element also ignore events
 * (e.g. mouse click), false otherwise
 * @returns {void}
 */
export default function (element, ignorePointerEvents) {
  element.style.webkitUserSelect = 'none';
  element.style.webkitTouchCallout = 'none';
  element.style.mozUserSelect = 'none';
  element.style.msUserSelect = 'none';
  element.style.oUserSelect = 'none';
  element.style.khtmlUserSelect = 'none';
  element.style.userSelect = 'none';

  element.unselectable = 'on';
  element.oncontextmenu = () => (false);

  if (ignorePointerEvents === true) {
    element.style.pointerEvents = 'none';
  }
}
