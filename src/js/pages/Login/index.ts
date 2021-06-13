import Component from "@/core/component";
import { LoginForm } from "@/components";
import { PAGE_TITLE, PATH } from "@/constants";
import { IPageInfo } from "@/types";
import { authStore } from "@/store";
import { newElement } from "@/utils/dom";

class Login extends Component {
  protected initDom(): void {
    this.$container = newElement(`<div class="wrapper p-10 bg-white"/>`);
  }

  protected initChildren(): void {
    const loginForm = new LoginForm();
    this.children = [loginForm];
  }

  protected beforeChangeURL(): boolean {
    const { isLoggedIn } = authStore.getState();
    if (isLoggedIn) return false;
    return true;
  }

  public pageInfo(): IPageInfo {
    if (!this.beforeChangeURL()) return;
    return {
      title: PAGE_TITLE.LOGIN,
      href: PATH.LOGIN,
    };
  }

  protected componentMount(): void {
    this.$container.innerHTML = `
    <div class="heading">
      <h2>👋🏼 로그인</h2>
    </div>`;
  }
}

export default Login;
