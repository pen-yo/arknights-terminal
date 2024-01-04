import { defineStore } from "pinia";

export const usePenguinIOStore = defineStore("penguin-io", () => {
  const apiMapper = new Map([
    // 根地址
    ["root", "https://penguin-stats.io"],
    // 当下活动
    ["now", "/PenguinStats/api/v2/period"],
    // 物品映射
    ["item", "/PenguinStats/api/v2/items"],
    // 物品掉落
    ["drop", "/PenguinStats/api/v2/items"],
  ]);

  /**
   * 向目标地址请求。
   */
  async function request(url: string, params?: Map<string, string>) {
    let fullURL = `${apiMapper.get("root")}${url}?`;
    if (params)
      params.forEach((v, k) => {
        fullURL += `${k}=${v}&`;
      });
    return await (await fetch(fullURL.slice(0, -1))).json();
  }

  /**
   * 获取当下活动。
   */
  async function getNow() {
    return (await request(apiMapper.get("now") as string)) as {
      start: number;
      end: number;
      label_i18n: {
        zh: string;
      };
    }[];
  }

  return { getNow };
});
