const FREE_LIMIT_KEY = "cbcbs_free_usage_count";
const FREE_LIMIT_MAX = 3;

export function getFreeUsageCount(): number {
  if (typeof window === "undefined") return 0;
  const rawValue = window.localStorage.getItem(FREE_LIMIT_KEY);
  const parsed = Number(rawValue ?? "0");
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

export function getFreeUsageRemaining(): number {
  return Math.max(0, FREE_LIMIT_MAX - getFreeUsageCount());
}

export function hasReachedFreeLimit(): boolean {
  return getFreeUsageCount() >= FREE_LIMIT_MAX;
}

export function incrementFreeUsage(): number {
  if (typeof window === "undefined") return 0;
  const nextValue = getFreeUsageCount() + 1;
  window.localStorage.setItem(FREE_LIMIT_KEY, String(nextValue));
  return nextValue;
}
