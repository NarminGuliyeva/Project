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
        code: 'all'
    },
    {
        id: 2,
        name: 'Pilləli alətlər',
        img: Piano,
        code: 'keyboard',
        altCat: [{
            name: "Akustik royal/piano",
            code: "acusticPiano"
        },
        {
            name: "Elektron royal/piano",
            code: "acusticPiano"
        },
        {
            name: "Aksesuarlar",
            code: "acusticPiano"
        }]
    },
    {
        id: 3,
        name: 'Simli alətlər',
        img: Simli,
        code: 'guitar',
        altCat: [{
            name: "Klassik gitara",
            code: "acusticPiano"
        },
        {
            name: "Elektron gitara",
            code: "acusticPiano"
        },
        {
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
            name: "Fleytalar",
            code: "acusticPiano"
        },
        {
            name: "Klarnet",
            code: "acusticPiano"
        },
        {
            name: "Saksafon",
            code: "acusticPiano"
        },
        {
            name: "Trumped",
            code: "acusticPiano"
        }]
    },
    {
        id: 5,
        name: 'Zərb alətləri',
        img: Zerb,
        code: 'zerb',
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
            name: "Tar",
            code: "acusticPiano"
        },
        {
            name: "Kamança",
            code: "acusticPiano"
        },
        {
            name: "Nağara",
            code: "acusticPiano"
        },
        {
            name: "Qarmon",
            code: "acusticPiano"
        }]
    },
]
