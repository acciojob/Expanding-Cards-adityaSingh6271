//your JS code here. If required.
 function expandPanel(panelId) {
    // Reset all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Expand the clicked panel
    const clickedPanel = document.getElementById(panelId);
    clickedPanel.classList.add('active');
  }