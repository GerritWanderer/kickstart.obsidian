(dv, params) => {
  // Provide defaults inside the function
  params = params || {};
  const folder = params.folder || '"00-Daily"';

  // Get all daily notes sorted by file name (assumes YYYY-MM-DD format)
  const dailyNotes = dv.pages(folder)
    .sort(p => p.file.name, 'asc');

  // Find current note's index
  const currentFile = dv.current().file.name;
  const currentIndex = dailyNotes.findIndex(p => p.file.name === currentFile);

  // Get previous and next notes
  const prevNote = currentIndex > 0 ? dailyNotes[currentIndex - 1] : null;
  const nextNote = currentIndex < dailyNotes.length - 1 ? dailyNotes[currentIndex + 1] : null;

  // Create container div
  const container = dv.container;
  const navDiv = container.createDiv({
    attr: {
      style: 'display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--background-modifier-border);'
    }
  });

  // Previous link
  const prevDiv = navDiv.createDiv();
  if (prevNote) {
    dv.span(`← [[${prevNote.file.name}|Previous]]`, { container: prevDiv });
  } else {
    prevDiv.createSpan({
      text: '← Previous',
      attr: { style: 'color: var(--text-muted);' }
    });
  }

  // Center label
  navDiv.createDiv({
    text: params.label || 'Daily Notes',
    attr: { style: 'color: var(--text-muted);' }
  });

  // Next link
  const nextDiv = navDiv.createDiv();
  if (nextNote) {
    dv.span(`[[${nextNote.file.name}|Next]] →`, { container: nextDiv });
  } else {
    nextDiv.createSpan({
      text: 'Next →',
      attr: { style: 'color: var(--text-muted);' }
    });
  }
};
