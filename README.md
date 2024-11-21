Here's a README template for your **Voice Live Chat Web UI** based on the source code provided:

---

# Voice Live Chat Web UI

This is a **Voice Chat Room** web interface, designed for a live chat environment where users can interact with each other in a virtual space. The interface includes functionalities such as displaying active users, empty seats, chat history, and a sticky footer with message input and send options.

## Features

- **Voice Chat Room Interface**: Users can join and interact in a live chat room.
- **User Slots**: Display for active and empty user slots with dynamic labeling.
- **Chat History**: A scrollable area to display past messages.
- **Sticky Footer**: Keeps the input field and buttons visible at the bottom of the screen.
- **Customizable Background**: Supports a gradient background or replaceable image.

## Technologies Used

- **HTML5**: For the structure and content of the page.
- **CSS3**: For styling and layout, including gradient backgrounds and flexbox for positioning.
- **JavaScript** (if necessary for dynamic content, not included in the provided source).

## Getting Started

### Prerequisites

To get started with this project, ensure you have the following:

- A modern web browser (Chrome, Firefox, Safari, etc.).
- A basic text editor (VS Code, Sublime Text, etc.) for code editing.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/yourusername/voice-livechat-web.git
   ```

2. **Open the HTML file**:
   - Navigate to the project directory and open the `index.html` file in your preferred web browser to view the live chat interface.

3. **Replace the placeholder images**:
   - Ensure that you have images for user avatars and background as needed. Replace `user1.jpg`, `host-avatar.jpg`, etc., with the correct image paths.

### Customization

- **Background**: You can customize the background by either replacing the gradient or updating the `background-image` property inside the `.chat-room::before` CSS rule.
  
  To use an image instead of a gradient, uncomment the following line and replace `'background.jpg'` with your desired image path:
  ```css
  .chat-room::before { background-image: url('background.jpg'); }
  ```

- **Chat History**: To populate the chat history, simply add more `<div class="message">` elements within the `.chat-history` section.

- **User Slots**: Update user avatars by changing the `src` attribute of the `<img>` tags inside `.user-slot` elements.

## Folder Structure

```plaintext
voice-livechat-web/
├── index.html           # Main HTML file for the chat UI
├── styles.css           # CSS file for styling
└── assets/              # Folder containing images (avatars, background)
    ├── user1.jpg
    ├── user2.jpg
    ├── host-avatar.jpg
    └── background.jpg
```

## Example of Chat History

```html
<div class="chat-history">
    <div class="message">
        <span>魔都·夕夕:</span>
        <p>大家好！很高兴来到这里。</p>
    </div>
    <div class="message">
        <span>魔都·静静:</span>
        <p>你好，夕夕！欢迎！</p>
    </div>
    <div class="message">
        <span>魔都·玫瑰:</span>
        <p>嗨，大家都好像很开心呀！</p>
    </div>
</div>
```

## Usage

- The chat room displays a **host** (who has an avatar and name) and users in available slots.
- Empty seats are marked with a number and the text "Empty."
- Users can type messages in the input field at the bottom of the screen, and messages will appear in the **chat history**.
- A **Send** button allows users to submit their messages, and a **Gift** button can be used for any other interactive features (customizable).

## Contributing

Contributions are welcome! If you'd like to improve the project, feel free to fork the repository and submit pull requests.

### Steps for contributing:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Make the necessary changes.
4. Push the changes to your forked repository.
5. Create a pull request for review.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README based on your specific use case and repository details!