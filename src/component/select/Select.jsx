import { createSelector } from 'reselect'



   
 const productSelector = state => state.products


export const filterProduct = createSelector(
    [productSelector], products => products
) 
export const filterPages = createSelector(
    [filterProduct], products => products.Pages
) 