import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with CMS content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Your Smile, Our Passion')
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/services"]')).toBeVisible()
    await expect(page.locator('nav a[href="/team"]')).toBeVisible()
    await expect(page.locator('nav a[href="/testimonials"]')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Ready for')).toBeVisible()
  })
})

test.describe('Services page', () => {
  test('lists dental services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.locator('text=Teeth Cleaning')).toBeVisible()
    await expect(page.locator('text=Teeth Whitening').first()).toBeVisible()
    await expect(page.locator('text=Dental Implants').first()).toBeVisible()
    await expect(page.locator('text=Orthodontics').first()).toBeVisible()
  })
})

test.describe('Team page', () => {
  test('lists providers from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Providers')
    await expect(page.locator('text=Dr. Sarah Chen').first()).toBeVisible()
    await expect(page.locator('text=Dr. James Martinez').first()).toBeVisible()
    await expect(page.locator('text=Dr. Priya Patel').first()).toBeVisible()
  })
})

test.describe('Testimonials page', () => {
  test('lists testimonials from Drupal', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1')).toContainText('Testimonials')
    await expect(page.locator('text=Emily Johnson').first()).toBeVisible()
    await expect(page.locator('text=Michael Williams').first()).toBeVisible()
  })
})

test.describe('Contact page', () => {
  test('renders contact form and info', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
    await expect(page.locator('form')).toBeVisible()
  })
})

test.describe('About page (slug routing)', () => {
  test('renders about page content from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })
})

test.describe('Navigation', () => {
  test('clicking Services navigates to services page', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a[href="/services"]').click()
    await expect(page).toHaveURL('/services')
    await expect(page.locator('h1')).toContainText('Services')
  })
})
