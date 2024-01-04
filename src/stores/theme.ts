import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  let isDark = JSON.parse(
    localStorage.getItem("is-dark") || "false",
  ) as boolean;

  /**
   * 更改主题。
   */
  function changeTheme() {
    isDark = !isDark;
    localStorage.setItem("is-dark", JSON.stringify(isDark));
    applyTheme();
  }

  /**
   * 应用主题。
   */
  function applyTheme() {
    const cl = document.documentElement.classList;
    if (isDark) cl.add("dark");
    else cl.remove("dark");
  }

  return { changeTheme, applyTheme };
});
