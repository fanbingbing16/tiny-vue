import { test, expect } from '@playwright/test'

test('日期标记', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-day-mark')
  const listitem = page.getByRole('listitem')
  const day30 = listitem.filter({ hasText: '30周日' }).locator('span').nth(2)
  const day1 = listitem.filter({ hasText: '1周一' }).locator('span').nth(2)
  const day6 = listitem.filter({ hasText: '6周六' }).locator('span').nth(2)
  const day7 = page.getByText('7周日')
  const rightSvg = page.locator('.header-right > .tiny-svg')
  const day8 = listitem.filter({ hasText: '8周一' }).locator('span').nth(2)
  await expect(day30).toBeVisible()
  await expect(day1).toHaveClass(/mark/)
  await expect(day1).toHaveClass(/mark-red/)
  await expect(day6).toHaveClass(/mark/)
  await expect(day7).not.toBeVisible()
  await rightSvg.click()
  await page.waitForTimeout(200)
  await expect(day7).toBeVisible()
  await expect(day8).toHaveClass(/mark/)
  await expect(day8).toHaveClass(/mark-red/)
})
