import { brandList } from "@/entities/Brand";
import { IProduct } from "@/entities/Product";

export function getBrandsFromProducts(products: IProduct[]) {
    const brandSet = new Set();

    products.forEach(product => brandSet.add(product.brandID));

    const brands = Array.from(brandSet).map(ID => {
        return brandList.find(brand => brand.id === ID)
    });

    return brands.filter(item => item !== undefined);
}