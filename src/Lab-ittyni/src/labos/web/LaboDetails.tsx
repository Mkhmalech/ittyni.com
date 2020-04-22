import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Article, Badge } from '../../../../ui-ittyni/src'
import { Ico } from '../../../../react-icons-sc/src/ico';
import {microscop} from '../../icon/microscop'
import { Labos } from '../controller/Labos';

const Labo = new Labos();

export const LaboDetails = ({laboDetails} : any) => {

    const { category, labo } = useParams()

    if (category === 'laboratoire-d-analyses-medicales' && labo !== undefined) {
        if(laboDetails === undefined || laboDetails === null || laboDetails.account.name !== labo){
            Labo.laboDetailsFetch(labo);
            return(<div>Loading...</div>)
        } else {
            const {
                account, contact : {tele, address}
            } = laboDetails
        return (
            <Article.Container>
                <Article.Header>
                    <Article.HeaderContainer>
                        <Article.HeaderAvatar>
                            <Article.HeaderAvatarIcon>
                                <Ico
                                    {...microscop}
                                    width="140"
                                    height="140"
                                />
                            </Article.HeaderAvatarIcon>
                        </Article.HeaderAvatar>
                        <Article.HeaderAbstract>
                            <Article.HeaderTitle>{account.name}</Article.HeaderTitle>
                            <Article.HeaderSubTitle>{category.split('-').join(' ')}</Article.HeaderSubTitle>
                            <Article.HeaderMiddle>
                                {address.street}
                            </Article.HeaderMiddle>
                            <Article.HeaderFoot>
                                <Article.HeaderFootAssurance>
                                    <p>tele : <Badge>{tele.fix[0]}</Badge></p>
                                </Article.HeaderFootAssurance>
                            </Article.HeaderFoot>
                        </Article.HeaderAbstract>
                    </Article.HeaderContainer>
                </Article.Header>
            </Article.Container>
        )}
    } else {
        return (<></>)
    }
}

interface ArticleDetailH1 {
    h1: string,
    detail: string | ArticleDetailH2[]
}
interface ArticleDetailH2 {
    h2: string
    p: string
}
const details: ArticleDetailH1[] = [
    {
        h1: 'Presentation',
        detail: ''
    },
    {
        h1: 'Departement',
        detail: [
            {
                h2: 'Biochimie',
                p: ''
            },
            {
                h2: 'Bacteriologie',
                p: ''
            },
            {
                h2: 'Serologie',
                p: ''
            },
            {
                h2: 'Genetique',
                p: ''
            }
        ]
    },
    {
        h1: 'Service',
        detail: [
            {
                h2: 'Prelevement a domicile',
                p: ''
            }
        ]
    },
    {
        h1: 'Convention',
        detail: [
            {
                h2: 'Cnops',
                p: ''
            },
            {
                h2: 'Cmim',
                p: ''
            },
        ]
    },
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