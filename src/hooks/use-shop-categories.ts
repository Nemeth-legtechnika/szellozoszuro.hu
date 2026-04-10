import { useTranslation } from 'react-i18next'

const useShopCategories = () => {
  const { t } = useTranslation()

  const categories = [
    {
      title: t('shop.categories.oem.title'),
      description: t('shop.categories.oem.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/gyari-szurok/',
      icon: '\u{1F3ED}',
    },
    {
      title: t('shop.categories.aftermarket.title'),
      description: t('shop.categories.aftermarket.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/utangyartott-szurok/',
      icon: '\u2B50',
    },
    {
      title: t('shop.categories.filterHouse.title'),
      description: t('shop.categories.filterHouse.description'),
      link: 'https://szelloztetes.eu/termekkategoria/szurok/szurohaz/',
      icon: '\u{1F4E6}',
    },
  ]

  return categories
}

export default useShopCategories
