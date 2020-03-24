import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Article, Badge } from '../../../../ui-ittyni/src'

export const LabTestDetail = () => {

    const { category, test } = useParams()


    return (
        <Article.Container>
            <Article.Header>
                <Article.HeaderContainer>
                    <Article.HeaderAvatar>
                        <Article.HeaderAvatarIcon>
                            <img
                                src="https://static.codepen.io/assets/packs/greensock-logo-9db91ff4c4a50faa1690d4f3d7ffca6e.png"
                                width="140"
                                height="140"
                            />
                        </Article.HeaderAvatarIcon>
                    </Article.HeaderAvatar>
                    <Article.HeaderAbstract>
                        <Article.HeaderTitle>{test}</Article.HeaderTitle>
                        <Article.HeaderSubTitle>{category ? category.replace('-', ' ') : ''}</Article.HeaderSubTitle>
                        <Article.HeaderMiddle>
                            <span>Serum</span>
                            <span> &nbsp;•&nbsp; </span>
                            <span>Plasma</span>
                            <span> &nbsp;•&nbsp; </span>
                            <span>Urine</span>
                            <span> &nbsp;•&nbsp; </span>
                            <span>dernier mise a jour 13/03/2020</span>
                        </Article.HeaderMiddle>
                        <Article.HeaderFoot>
                            <Article.HeaderFootAssurance> 
                                <p><Badge>Prix Total : 88 dhs</Badge></p>
                                <p>
                                    <Badge bgcolor="#388e3c">CNSS : {Math.floor(88*0.7)} dhs</Badge>  
                                    <Badge bgcolor="#d32f2f">Adherent : {Math.floor(88*0.3)} dhs</Badge>
                                </p>
                                <p>
                                    <Badge bgcolor="#388e3c">CNOPS : {Math.floor(88*0.8)} dhs</Badge>
                                    <Badge bgcolor="#d32f2f">Adherent : {Math.floor(88*0.2)} dhs</Badge>
                                </p>
                                
                            </Article.HeaderFootAssurance>
                        </Article.HeaderFoot>
                    </Article.HeaderAbstract>
                </Article.HeaderContainer>
            </Article.Header>

            {ArticleComponent(details)}

        </Article.Container>
    )
}

interface ArticleDetailH1 {
    h1: string,
    detail: string | ArticleDetailH2[]
}
interface ArticleDetailH2 {
    h2: string
    p: string
}
const details : ArticleDetailH1[] = [
    {
        h1: 'Presentation',
        detail : 'en Cours...'
    },
    {
        h1: 'Pre-analytique',
        detail: [
            {
                h2: 'Echantillon',
                p: 'en Cours...'
            },
            {
                h2: 'Patient',
                p: 'en Cours...'
            },
            {
                h2: 'Preleveur',
                p: 'en Cours...'
            },
            {
                h2: 'Transport',
                p: 'en Cours...'
            }
        ]
    },
    {
        h1 : 'Analytiques',
        detail : [
            {
                h2 : 'Methodlogie',
                p : 'en cours...'
            },{
                h2 : 'Automates',
                p : 'en cours...'
            },{
                h2 : 'Materielles',
                p : 'en cours...'
            }
        ]
    }
]

const ArticleComponent = (
    articleDetail: ArticleDetailH1[]
) => {

    return articleDetail.map((article: ArticleDetailH1) => (
        <Article.Paragraphe key={article.h1}>
            <Article.ParagraphTitle>{article.h1}</Article.ParagraphTitle>
            {
                
                typeof article.detail === 'string' ?
                    <Article.ParagraphText>
                        {article.detail}
                    </Article.ParagraphText>
                    :
                    article.detail.map((detail) => (
                        <div key={detail.h2}>
                            <Article.ParagraphSubTitle>{detail.h2}</Article.ParagraphSubTitle>
                            <Article.ParagraphText>
                                {detail.p}
                            </Article.ParagraphText>
                        </div>
                    ))

            }

        </Article.Paragraphe>
    ))

}
