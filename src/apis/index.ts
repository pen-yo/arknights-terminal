import type { InGameActivity } from "@/types/responses";

export namespace Calc {
  /**
   * 获取指定截止日期前可恢复理智数。
   */
  export function getPhysical(until: Date) {
    const diffMins = (until.getTime() - new Date().getTime()) / (1000 * 60);
    if (diffMins <= 0) return 0;
    return Math.floor(diffMins / 6);
  }

  /**
   * 检查活动是否已真实结束。
   */
  export function isActuallyPassed(activity: InGameActivity) {
    return activity.end < new Date();
  }
}

export namespace Format {
  /**
   * 获取日期的可读字符串。
   */
  export function toString(
    now: Date = new Date(),
    needDayTime: boolean = true,
  ) {
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    return (
      `${year}年${month}月${day}日` + (needDayTime ? ` ${hour}:${minute}` : "")
    );
  }
}

export namespace Request {
  /**
   * 获取目标源 JSON 结构化的对象。
   */
  async function powerFetch(url: string) {
    return await (await fetch(url)).json();
  }

  type ApiType = "活动" | "物品" | "掉落";

  /**
   * 获取 API。
   */
  function getApi(apiType: ApiType) {
    const root = "https://penguin-stats.io";
    const apiMapper = new Map<ApiType, string>([
      ["活动", "/PenguinStats/api/v2/period"],
      ["物品", "/PenguinStats/api/v2/items"],
      ["掉落", "/PenguinStats/api/v2/items"],
    ]);
    return root + apiMapper.get(apiType);
  }

  /**
   * 获取全部活动。
   */
  export async function getActivities() {
    const activitiesRaw = (await powerFetch(getApi("活动"))) as {
      start: number;
      end: number;
      label_i18n: {
        zh: string;
      };
      existence: {
        CN: {
          exist: boolean;
        };
      };
    }[];
    const activities = [] as InGameActivity[];
    activitiesRaw.forEach((ar) => {
      activities.push({
        start: new Date(ar.start),
        end: new Date(ar.end),
        name: ar.label_i18n.zh,
      });
    });
    return activities;
  }

  /**
   * 获取当下活动。
   */
  export async function getNowActivity() {
    return (await getActivities()).pop()!;
  }

  /**
   * 获取静态图像。
   */
  export function getImage(type: "干员" | "材料", data: [string, string]) {
    return `https://prts.wiki/images/${(() => {
      switch (type) {
        case "干员":
          return `${data[1]}/头像_${data[0]}`;
        case "材料":
          return `${data[1]}/道具_带框_${data[0]}`;
      }
    })()}.png`;
  }
}
