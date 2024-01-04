export namespace Calc {
  /**
   * 获取指定截止日期前可恢复理智数。
   */
  export function getPhysical(until: Date) {
    const diffMins = (until.getTime() - new Date().getTime()) / (1000 * 60);
    if (diffMins <= 0) return 0;
    return Math.floor(diffMins / 6);
  }
}
