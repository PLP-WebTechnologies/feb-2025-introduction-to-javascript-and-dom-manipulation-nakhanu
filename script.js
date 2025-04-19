function changeQuote() {
    const quotes = [
      ' "Motivation is overrated. Environment matters the most." — James Clear',
      '"The best way to predict the future is to create it." — Peter Drucker',
      '"The only way to do great work is to love what you do." — Steve Jobs',
      '"The future belongs to those who prepare for it today." — Malcolm X',
      '"Success is not final, failure is not fatal: It is the courage to continue that counts." — Winston Churchill',
      '"Hardships often prepare ordinary people for an extraordinary destiny." — C.S. Lewis'

    ];
    const quoteEl = document.getElementById("quote");
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[random];
  }
  
  function highlightQuote() {
    const quoteEl = document.getElementById("quote");
    quoteEl.classList.toggle("highlight");
  }
  
  function addNote() {
    const noteContainer = document.getElementById("note-container");
    if (!document.getElementById("note")) {
      const note = document.createElement("div");
      note.id = "note";
      note.textContent = "💡 Keep going. You are closer than you think!";
      noteContainer.appendChild(note);
    }
  }
  
  function removeNote() {
    const note = document.getElementById("note");
    if (note) {
      note.remove();
    }
  }
