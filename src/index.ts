import 'bpmn-font/dist/css/bpmn.css';
import 'diagram-js/assets/diagram-js.css';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import './style/main.css';
import MultiInstanceApplication from './app/multi-instance/MultiInstanceApplication';

window.addEventListener('load', () => {
  const container = document.getElementById('container');
  if (!container) {
    return;
  }

  // Extract the playbook_id from the URL
  const urlPath = window.location.pathname;
  console.log('Url:', urlPath);

  // Handle root path
  if (urlPath === '/') {
    new MultiInstanceApplication(container);
    return;
  }

  // Handle /playbook_id and /history/playbook_id
  const segments = urlPath.split('/').filter(segment => segment);
  if (segments.length === 1) {
    // Initialize with playbook
    const playbookId = segments[0];
    console.log(`Playbook ID: ${playbookId}`);
    new MultiInstanceApplication(container, playbookId);
  } else if (segments.length === 2 && segments[0] === 'history') {
    // Initialize with history playbook
    const playbookId = segments[1];
    console.log(`Playbook ID: ${playbookId}`);
    new MultiInstanceApplication(container, playbookId, true);
  } else {
    // Invalid path
    console.log('Invalid path, redirecting to 404');
    window.location.href = '/404.html';
  }
});

// Change the URL path without reloading the page
function changePath(newPath: string): void {
  // Update the URL path
  window.history.pushState({}, '', newPath);

  // You can trigger additional logic here if needed
  console.log('New path:', window.location.pathname);
}
