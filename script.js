function toggleChat() {
  const chatBody = document.getElementById("chat-body");
  chatBody.style.display = chatBody.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userMessage");
  const msg = input.value.trim();
  if (msg === "") return;

  const messages = document.getElementById("messages");

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = msg;
  messages.appendChild(userMsg);

  // Bot reply (static for demo)
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = "Thanks for your message! I'll get back to you soon.";
  messages.appendChild(botMsg);

  // Scroll to bottom
  messages.scrollTop = messages.scrollHeight;

  input.value = "";
}
