import ReactIcon from "./icons/react.svg";
import ViteIcon from "./icons/vite.svg";
import ZedIcon from "./icons/zed.svg";
import "./footer.css";

function GrasswingFooter() {
  return (
    <footer class="grasswing-footer">
      <div class="grasswing-footer-icons">
        <div class="grasswing-footer-images">
          <img src={ReactIcon} />
          <section class="horizontal" />
          <img src={ViteIcon} />
          <section class="horizontal" />
          <img src={ZedIcon} />
        </div>
        <p class="tool-copyright">© Meta Open Source, VoidZero and Zed Ind.</p>
      </div>
      <section class="horizontal" />
      <div class="grasswing-footer-links">
        <text class="grasswing-footer-title">Documentation</text>
        <section class="vertical" />
        <a class="grasswing-footer-docs" href="https://zed.dev/docs/">
          Zed Documentation
        </a>
        <a class="grasswing-footer-docs" href="https://vite.dev/guide/">
          Vite Documentation
        </a>
        <a class="grasswing-footer-docs" href="https://react.dev/learn">
          React Documentation
        </a>
      </div>
      <section class="horizontal" />
      <div class="grasswing-footer-links">
        <text class="grasswing-footer-title">Support</text>
        <section class="vertical" />
        <a class="grasswing-footer-docs" href="https://zed.dev/docs/">
          Patreon
        </a>
        <a class="grasswing-footer-docs" href="https://vite.dev/guide/">
          YouTube
        </a>
        <a class="grasswing-footer-docs" href="https://react.dev/learn">
          Instagram
        </a>
      </div>
      <section class="horizontal" />
      <div class="grasswing-footer-links">
        <text class="grasswing-footer-title">Updates</text>
        <section class="vertical" />
        <a class="grasswing-footer-docs" href="https://zed.dev/docs/">
          GitHub
        </a>
        <a class="grasswing-footer-docs" href="https://vite.dev/guide/">
          GitLab
        </a>
        <a class="grasswing-footer-docs" href="https://react.dev/learn">
          Code.Overheid.NL
        </a>
      </div>
      <section class="horizontal" />
      <div class="grasswing-footer-copyright">
        <p>
          © 2023-2026 Project Grasswing. Made with the intent to provide the
          users with an all-in-one experience for day-to-day use.{" "}
        </p>
      </div>
    </footer>
  );
}
export default GrasswingFooter;
