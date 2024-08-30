/**
 * Developed by Anthony Cox in 2024
 */
import { render } from '@testing-library/react';

/**
 * Test Development module which features a number of functions designed
 * to make unit testing, snapshot testing and accessibility testing much easier
 */
export default class TestDev {
  /**
   * Generates a HTML snapshot as a string for the specified React component
   * @param {React.Component} ReactComponent
   * @returns {string}
   */
  static createSnapshot(ReactComponent) {
    const { container, unmount } = render(ReactComponent);
    const htmlSnapshot = container.innerHTML;
    unmount();
    return htmlSnapshot;
  }

  /**
   * Gets the HTML DOM which contains the React component for accessibility testing.
   * Once completed the full HTML content for the current document is returned, intended
   * for use with an accessibility framework.
   * @param {string} htmlTitle 
   * @returns {string}
   */
  static getComponentInHTMLTemplate(htmlTitle = 'Mounted HTML Template') {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.setAttribute('lang', 'en');
    if (document.getElementsByTagName('title').length === 0) {
      /* Create a title element with the relevant title */
      const titleElement = document.createElement('title');
      titleElement.textContent = htmlTitle;
      /* Append the title element to the head element */
      const headElement = document.getElementsByTagName('head')[0];
      headElement.appendChild(titleElement);
    } else {
      /* Set the title text content to the existing element */
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.textContent = htmlTitle;
    }
    return document.getElementsByTagName('html')[0].outerHTML;
  }
}
