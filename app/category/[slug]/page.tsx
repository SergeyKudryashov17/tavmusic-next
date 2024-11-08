import { getCategoryData } from "@/entities/Category";
import CategoriesPage from "@/pages/CategoriesPage";
import { Metadata } from "next";

type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params }: Props): Metadata {
	const { slug } = params;
	const currentCategory = getCategoryData(slug);
	const categoryName = currentCategory ? currentCategory.name : 'Неизвестно';

	return {
		title: `${categoryName}`
	};
}

export default function Category() {	
	return <CategoriesPage/>;
}
