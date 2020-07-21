import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Article, Badge } from '../../../../ui-ittyni/src'
import { Labtests } from '../controller/labtests';
import { Ico } from '../../../../react-icons-sc/src/ico';
import { atom } from '../../icon/atom'
import { Helmet } from 'react-helmet';

const labtest = new Labtests();

export const LabTestDetail = ({ labTestFrDetails }: any) => {

    const { category, test } = useParams();

    if (category === 'analyses-medicales' && test !== undefined) {
        if (labTestFrDetails === undefined || labTestFrDetails === null || labTestFrDetails.name.fr !== test) {
            labtest.labTestFrFetchDetails(test)
            return <div>Loading....</div>
        } else {
            const {
                name: { fr },
                finance,
                reference: { Mnemonic },
                specimen: { nature, tubeColor, anticoagulant, numberoftube, volumemin }
            } = labTestFrDetails
            return (
                <>
                    <Helmet>
                        <title>{labTestFrDetails.name.fr}</title>
                        <meta name="description" content={`prix analyse ${labTestFrDetails.name.fr} aux maroc list `} />
                        <meta name="keywords" content={`prix tarif analyse maroc ${labTestFrDetails.name.fr}`} />
                    </Helmet>
                    <Article.Container>
                        <Article.Header>
                            <Article.HeaderContainer>
                                <Article.HeaderAvatar>
                                    <Article.HeaderAvatarIcon>
                                        <Ico
                                            {...atom}
                                            width="140"
                                            height="140"
                                        />
                                    </Article.HeaderAvatarIcon>
                                </Article.HeaderAvatar>
                                <Article.HeaderAbstract>
                                    <Article.HeaderTitle>{labTestFrDetails.name.fr}</Article.HeaderTitle>
                                    <Article.HeaderSubTitle>{category ? category.split('-').join(' ') : ''}</Article.HeaderSubTitle>
                                    <Article.HeaderMiddle>
                                        {nature ? nature.map((nature: any) => (
                                            <span key={nature}>
                                                <span>{nature}</span>
                                                <span> &nbsp;•&nbsp; </span>
                                            </span>
                                        ))
                                            :
                                            ''}
                                    </Article.HeaderMiddle>
                                    <Article.HeaderFoot>
                                        <Article.HeaderFootAssurance>
                                            {finance[0] ? <>
                                                <p><Badge>
                                                    Prix Total : {Math.floor(finance[0].Bcode * 1.34)} dhs
                                            </Badge></p>
                                                <p>
                                                    <Badge bgcolor="#388e3c">
                                                        CNSS : {Math.floor((finance[0].Bcode * 1.1) * 0.7)} dhs
                                                </Badge>
                                                    <Badge bgcolor="#d32f2f">
                                                        Adherent : {Math.floor((finance[0].Bcode * 1.34) - ((finance[0].Bcode * 1.1) * 0.7))} dhs
                                                </Badge>
                                                </p>
                                                <p><Badge bgcolor="#388e3c">
                                                    CNOPS : {Math.floor((finance[0].Bcode * 1.1) * 0.8)} dhs
                                                </Badge><Badge bgcolor="#d32f2f">
                                                        Adherent : {Math.floor((finance[0].Bcode * 1.34) - ((finance[0].Bcode * 1.1) * 0.8))} dhs
                                                </Badge>
                                                </p>
                                            </> : ''}
                                        </Article.HeaderFootAssurance>
                                    </Article.HeaderFoot>
                                </Article.HeaderAbstract>
                            </Article.HeaderContainer>
                        </Article.Header>

                    </Article.Container>
                </>
            )

        }
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
        detail: 'en Cours...'
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
        h1: 'Analytiques',
        detail: [
            {
                h2: 'Methodlogie',
                p: 'en cours...'
            }, {
                h2: 'Automates',
                p: 'en cours...'
            }, {
                h2: 'Materielles',
                p: 'en cours...'
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
