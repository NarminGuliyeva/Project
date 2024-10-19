import Mix from '../../assets/images/categoriesImg/mix.png'
import Piano from '../../assets/images/categoriesImg/piano.png'
import Simli from '../../assets/images/categoriesImg/simli (9).png'
import Nefes from '../../assets/images/categoriesImg/nefes.png'
import Zerb from '../../assets/images/categoriesImg/zerb (4).png'
import Tar from '../../assets/images/categoriesImg/tar.png'

export const categoriesData = [
    {
        id: 1,
        name: 'Hamısı',
        img: Mix,
        code: 'all',
        catId: "All",
    },
    {
        id: 2,
        name: 'Pilləli alətlər',
        img: Piano,
        code: 'keyboard',
        altCat: [{
            catId: 1,
            name: "Akustik royal/piano",
            code: "acusticPiano"
        },
        {
            catId: 2,
            name: "Elektron royal/piano",
            code: "acusticPiano"
        // }
        // ,
        // {
        //     catId: 3,
        //     name: "Aksesuarlar",
        //     code: "acusticPiano"
        }]
    },
    {
        id: 3,
        name: 'Simli alətlər',
        img: Simli,
        code: 'guitar',
        altCat: [{
            catId: 4,
            name: "Klassik gitara",
            code: "acusticPiano"
        },
        {
            catId: 5,
            name: "Elektron gitara",
            code: "acusticPiano"
        },
        {
            catId: 6,
            name: "Skripkalar",
            code: "acusticPiano"
        }]
    },
    {
        id: 4,
        name: 'Nəfəs alətləri',
        img: Nefes,
        code: 'nefes',
        altCat: [{
            catId: 7,
            name: "Fleytalar",
            code: "acusticPiano"
        },
        {
            catId: 8,
            name: "Klarnet",
            code: "acusticPiano"
        },
        {
            catId: 9,
            name: "Saksafon",
            code: "acusticPiano"
        },
        {
            catId: 10,
            name: "Trumped",
            code: "acusticPiano"
        }]
    },
    {
        id: 5,
        name: 'Zərb alətləri',
        img: Zerb,
        code: 'zerb',
        catId: 11
        // altCat: [{
        //     name: "Akustik",
        //     code: "acusticPiano"
        // },
        // {
        //     name: "Elektron",
        //     code: "acusticPiano"
        // }]
    },
    {
        id: 6,
        name: 'Xalq alətləri',
        img: Tar,
        code: 'xalq',
        altCat: [{
            catId: 12,
            name: "Tar",
            code: "acusticPiano"
        },
        {
            catId: 13,
            name: "Kamança",
            code: "acusticPiano"
        },
        {
            catId: 14,
            name: "Nağara",
            code: "acusticPiano"
        },
        {
            catId: 15,
            name: "Qarmon",
            code: "acusticPiano"
        }]
    },
]
