export type AppRoutes = '/' | '/about' | '/family_holiday' | '/adviсe' | '/blog'
export type AppRoutesName = 'main' | 'about' | 'family_holiday' | 'advice' | 'blog'
export const AppRouter: Record<AppRoutesName, AppRoutes> = {
    main: '/',
    about: '/about',
    advice: '/adviсe',
    blog: '/blog',
    family_holiday: '/family_holiday'

}