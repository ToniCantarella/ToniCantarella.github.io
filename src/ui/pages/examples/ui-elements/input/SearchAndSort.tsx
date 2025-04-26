import { useEffect, useState } from "react"
import SearchIcon from "../../../../../assets/search.svg?react"
import "./SearchAndFilter.scss"

const FoodItems = [
    "apple",
    "orange",
    "grape",
    "pear",
    "banana",
    "sushi",
    "fish",
    "bread"
]

type SearchItem = {
    cost: number,
    name: string
}

const SearchItems: SearchItem[] = FoodItems.map(food => (
    {
        cost: Math.floor(Math.random() * 10),
        name: food
    }
))

enum Sort {
    ASC,
    DESC
}

export const SearchAndSort = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [searchResults, setSearchResults] = useState<SearchItem[]>(SearchItems)
    const [costSort, setCostSort] = useState<Sort | null>(null)
    const [nameSort, setNameSort] = useState<Sort | null>(null)

    useEffect(() => {
        if (searchQuery.length > 2) {
            const timeout = setTimeout(() => {
                const results = SearchItems.filter(item => item.name.includes(searchQuery.toLowerCase()))
                setSearchResults(results);
            }, 300)

            return () => clearTimeout(timeout);
        } else {
            setSearchResults(SearchItems)
        }
    }, [searchQuery])

    const onCostSortChange = () => {
        const newFilter = costSort === Sort.ASC ? Sort.DESC : Sort.ASC
        setCostSort(newFilter)
        const results = searchResults.sort((a, b) => newFilter === Sort.ASC ? a.cost - b.cost : b.cost - a.cost)
        setSearchResults(results)
    }

    const onNameSortChange = () => {
        const newFilter = nameSort === Sort.ASC ? Sort.DESC : Sort.ASC
        setNameSort(newFilter)
        const results = searchResults.sort((a, b) => newFilter === Sort.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        setSearchResults(results)
    }

    const onClearAll = () => {
        setSearchQuery("")
        setCostSort(null)
        setNameSort(null)
        setSearchResults(SearchItems)
    }

    return (
        <div className="search-and-filter">
            <div>
                <div className="sorting">
                    <button
                        onClick={() => onCostSortChange()}
                    >
                        cost
                    </button>
                    <button
                        onClick={() => onNameSortChange()}
                    >
                        name
                    </button>
                    <button
                        onClick={() => onClearAll()}
                    >
                        clear
                    </button>
                </div>
                <div className="search">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                        placeholder="placehodler"
                    />
                    <button
                        className="search-button"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </div>
            <div className="results">
                {searchResults.map((item, index) => (
                    <div
                        key={index}
                        className="result"
                    >
                        {item.cost} / {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}