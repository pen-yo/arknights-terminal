import { defineStore } from "pinia";

const names = [
  "酮凝集组",
  "异铁组",
  "糖组",
  "聚酸酯组",
  "全新装置",
  "固源岩组",
  "RMA70-12",
  "研磨石",
  "轻锰矿",
  "扭转醇",
  "凝胶",
  "炽合金",
  "晶体元件",
  "半自然溶剂",
  "化合切削液",
  "褐素纤维",
  "转质盐组",
  "环烃聚质",
] as const;

export type MaterialName = (typeof names)[number];

export const useMaterialStore = defineStore("material", () => {
  /**
   * 获取全部名称。
   */
  function getNames() {
    return names as unknown as MaterialName[];
  }

  const iconMapper = new Map<MaterialName, string>([
    ["酮凝集组", "https://prts.wiki/images/d/d6/道具_带框_酮凝集组.png"],
    ["异铁组", "https://prts.wiki/images/1/14/道具_带框_异铁组.png"],
    ["糖组", "https://prts.wiki/images/1/11/道具_带框_糖组.png"],
    ["聚酸酯组", "https://prts.wiki/images/0/09/道具_带框_聚酸酯组.png"],
    ["全新装置", "https://prts.wiki/images/b/be/道具_带框_全新装置.png"],
    ["固源岩组", "https://prts.wiki/images/2/2e/道具_带框_固源岩组.png"],
    ["RMA70-12", "https://prts.wiki/images/7/7c/道具_带框_RMA70-12.png"],
    ["研磨石", "https://prts.wiki/images/e/e7/道具_带框_研磨石.png"],
    ["轻锰矿", "https://prts.wiki/images/e/e6/道具_带框_轻锰矿.png"],
    ["扭转醇", "https://prts.wiki/images/a/a8/道具_带框_扭转醇.png"],
    ["凝胶", "https://prts.wiki/images/4/4b/道具_带框_凝胶.png"],
    ["炽合金", "https://prts.wiki/images/7/72/道具_带框_炽合金.png"],
    ["晶体元件", "https://prts.wiki/images/2/2b/道具_带框_晶体元件.png"],
    ["半自然溶剂", "https://prts.wiki/images/2/23/道具_带框_半自然溶剂.png"],
    ["化合切削液", "https://prts.wiki/images/6/69/道具_带框_化合切削液.png"],
    ["褐素纤维", "https://prts.wiki/images/a/ad/道具_带框_褐素纤维.png"],
    ["转质盐组", "https://prts.wiki/images/7/7a/道具_带框_转质盐组.png"],
    ["环烃聚质", "https://prts.wiki/images/b/bf/道具_带框_环烃聚质.png"],
  ]);

  /**
   * 获取图标。
   */
  function getIcon(mn: MaterialName) {
    return iconMapper.get(mn) || "";
  }

  const staticLevelsData = new Map<
    MaterialName,
    {
      code: string;
      cost: number;
      efficiency: number;
    }[]
  >([
    [
      "酮凝集组",
      [
        {
          code: "10-4",
          cost: 21,
          efficiency: 38.08,
        },
        {
          code: "10-4",
          cost: 21,
          efficiency: 38.79,
        },
        {
          code: "JT8-3",
          cost: 18,
          efficiency: 40.18,
        },
      ],
    ],
    [
      "异铁组",
      [
        {
          code: "S4-1",
          cost: 15,
          efficiency: 57.2,
        },
        {
          code: "S4-2",
          cost: 15,
          efficiency: 58.67,
        },
        {
          code: "S5-3",
          cost: 15,
          efficiency: 57.81,
        },
      ],
    ],
    [
      "糖组",
      [
        {
          code: "4-9",
          cost: 12,
          efficiency: 45.83,
        },
        {
          code: "4-10",
          cost: 12,
          efficiency: 47.17,
        },
        {
          code: "7-16",
          cost: 12,
          efficiency: 47.5,
        },
      ],
    ],
    [
      "聚酸酯组",
      [
        {
          code: "S4-7",
          cost: 15,
          efficiency: 63.53,
        },
        {
          code: "S4-8",
          cost: 15,
          efficiency: 63.86,
        },
        {
          code: "S5-7",
          cost: 15,
          efficiency: 63.87,
        },
      ],
    ],
    [
      "全新装置",
      [
        {
          code: "S4-6",
          cost: 15,
          efficiency: 60.93,
        },
        {
          code: "S4-9",
          cost: 15,
          efficiency: 63.53,
        },
        {
          code: "S5-9",
          cost: 15,
          efficiency: 64.29,
        },
      ],
    ],
    [
      "固源岩组",
      [
        {
          code: "S3-1",
          cost: 15,
          efficiency: 57.2,
        },
        {
          code: "S3-2",
          cost: 15,
          efficiency: 57.81,
        },
        {
          code: "S4-3",
          cost: 18,
          efficiency: 58.67,
        },
      ],
    ],
    [
      "RMA70-12",
      [
        {
          code: "S4-10",
          cost: 15,
          efficiency: 61.8,
        },
        {
          code: "S4-11",
          cost: 15,
          efficiency: 62.93,
        },
        {
          code: "S5-10",
          cost: 15,
          efficiency: 62.55,
        },
      ],
    ],
    [
      "研磨石",
      [
        {
          code: "3-3",
          cost: 9,
          efficiency: 31.11,
        },
        {
          code: "4-6",
          cost: 12,
          efficiency: 40.0,
        },
        {
          code: "S3-4",
          cost: 15,
          efficiency: 50.13,
        },
      ],
    ],
    [
      "轻锰矿",
      [
        {
          code: "5-2",
          cost: 12,
          efficiency: 47.5,
        },
        {
          code: "6-16",
          cost: 15,
          efficiency: 52.0,
        },
        {
          code: "7-11",
          cost: 18,
          efficiency: 52.22,
        },
      ],
    ],
    [
      "扭转醇",
      [
        {
          code: "S4-5",
          cost: 15,
          efficiency: 64.29,
        },
        {
          code: "S5-5",
          cost: 15,
          efficiency: 64.29,
        },
        {
          code: "S5-7",
          cost: 15,
          efficiency: 64.29,
        },
      ],
    ],
    [
      "凝胶",
      [
        {
          code: "S4-2",
          cost: 18,
          efficiency: 48.89,
        },
        {
          code: "S4-3",
          cost: 18,
          efficiency: 50.0,
        },
        {
          code: "S5-4",
          cost: 18,
          efficiency: 50.0,
        },
      ],
    ],
    [
      "炽合金",
      [
        {
          code: "S4-8",
          cost: 15,
          efficiency: 62.93,
        },
        {
          code: "S5-8",
          cost: 15,
          efficiency: 62.55,
        },
        {
          code: "S5-10",
          cost: 18,
          efficiency: 61.85,
        },
      ],
    ],
    [
      "晶体元件",
      [
        {
          code: "S3-8",
          cost: 15,
          efficiency: 63.2,
        },
        {
          code: "S4-7",
          cost: 15,
          efficiency: 63.53,
        },
        {
          code: "S5-8",
          cost: 15,
          efficiency: 63.87,
        },
      ],
    ],
    [
      "半自然溶剂",
      [
        {
          code: "S4-6",
          cost: 15,
          efficiency: 60.93,
        },
        {
          code: "S5-6",
          cost: 18,
          efficiency: 61.11,
        },
        {
          code: "S5-8",
          cost: 15,
          efficiency: 62.55,
        },
      ],
    ],
    [
      "化合切削液",
      [
        {
          code: "S3-7",
          cost: 15,
          efficiency: 63.2,
        },
        {
          code: "S4-5",
          cost: 15,
          efficiency: 64.29,
        },
        {
          code: "S5-9",
          cost: 15,
          efficiency: 64.29,
        },
      ],
    ],
    [
      "褐素纤维",
      [
        {
          code: "13-5",
          cost: 24,
          efficiency: 65.04,
        },
        {
          code: "13-5T",
          cost: 24,
          efficiency: 65.09,
        },
        {
          code: "10-17",
          cost: 24,
          efficiency: 853.79,
        },
      ],
    ],
    [
      "转质盐组",
      [
        {
          code: "S4-1",
          cost: 15,
          efficiency: 57.2,
        },
        {
          code: "S4-2",
          cost: 15,
          efficiency: 57.81,
        },
        {
          code: "S5-3",
          cost: 15,
          efficiency: 57.81,
        },
      ],
    ],
    [
      "环烃聚质",
      [
        {
          code: "13-15",
          cost: 24,
          efficiency: 77.94,
        },
        {
          code: "13-15T",
          cost: 24,
          efficiency: 78.93,
        },
        {
          code: "13-21",
          cost: 24,
          efficiency: 999.99,
        },
      ],
    ],
  ]);

  /**
   * 获取关卡数据。
   */
  function getLevelsData(mn: MaterialName) {
    return staticLevelsData.get(mn) as {
      code: string;
      cost: number;
      efficiency: number;
    }[];
  }

  return { getNames, getIcon, getLevelsData };
});
