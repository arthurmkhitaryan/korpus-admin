import type { Schema, Attribute } from '@strapi/strapi';

export interface QuestionQuestion extends Schema.Component {
  collectionName: 'components_question_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.String;
  };
}

export interface PreferenceProductPrefererenceProduct extends Schema.Component {
  collectionName: 'components_preference_product_prefererence_products';
  info: {
    displayName: 'prefererence-product';
    description: '';
  };
  attributes: {
    tablecloth: Attribute.Enumeration<['size 20', 'size 28']>;
    support: Attribute.Enumeration<['size 20', 'size 30', 'size 100']>;
    type: Attribute.Enumeration<['size withoutHandle']>;
  };
}

export interface PreferenceItemParamsPreferenceItemParams
  extends Schema.Component {
  collectionName: 'components_preference_item_params_preference_item_params';
  info: {
    displayName: 'PreferenceItemParams';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
  };
}

export interface PreferenceItemPreferenceItem extends Schema.Component {
  collectionName: 'components_preference_item_preference_items';
  info: {
    displayName: 'PreferenceItem';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    default: Attribute.String;
    items: Attribute.Component<
      'preference-item-params.preference-item-params',
      true
    >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isFixed: Attribute.Boolean;
    type: Attribute.Enumeration<['none', 'input', 'select', 'singleSelect']> &
      Attribute.DefaultTo<'none'>;
  };
}

export interface LearnMoreBlockLearnMore extends Schema.Component {
  collectionName: 'components_learn_more_block_learn_mores';
  info: {
    displayName: 'Learn-More';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FacadePreferencesFacadePreferences extends Schema.Component {
  collectionName: 'components_facade_preferences_facade_preferences';
  info: {
    displayName: 'FacadePreferences';
  };
  attributes: {
    facade: Attribute.Enumeration<['With', 'Without']> &
      Attribute.Required &
      Attribute.DefaultTo<'With'>;
    type: Attribute.Enumeration<
      ['Smooth', 'Framework', 'Milled', 'Glass', 'Other']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Smooth'>;
    facadeType: Attribute.Enumeration<
      ['Lam. Chipboard', 'Lam. MDF', 'MDF coloring', 'MDF veneer', 'MDF HPL']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Lam. Chipboard'>;
  };
}

export interface AboutQuestionsAboutQuestions extends Schema.Component {
  collectionName: 'components_about_questions_about_questions';
  info: {
    displayName: 'About-Questions';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'question.question', true>;
    about_questions_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutInfoInfoBlock extends Schema.Component {
  collectionName: 'components_info_info_blocks';
  info: {
    displayName: 'InfoBlock';
    description: '';
  };
  attributes: {
    firstContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    firstImage: Attribute.Media<'images'> & Attribute.Required;
    secondaryContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    secondaryImage: Attribute.Media<'images'> & Attribute.Required;
    lastContent: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
    lastImage: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface LacquerPercentageLacquerPercentage extends Schema.Component {
  collectionName: 'components_lacquer_percentage_lacquer_percentages';
  info: {
    displayName: 'Lacquer-percentage';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface FacadeColorFacadeColor extends Schema.Component {
  collectionName: 'components_facade_color_facade_colors';
  info: {
    displayName: 'facade-color';
  };
  attributes: {
    title: Attribute.String;
    hex: Attribute.String;
    colorCategory: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'question.question': QuestionQuestion;
      'preference-product.prefererence-product': PreferenceProductPrefererenceProduct;
      'preference-item-params.preference-item-params': PreferenceItemParamsPreferenceItemParams;
      'preference-item.preference-item': PreferenceItemPreferenceItem;
      'learn-more-block.learn-more': LearnMoreBlockLearnMore;
      'facade-preferences.facade-preferences': FacadePreferencesFacadePreferences;
      'about-questions.about-questions': AboutQuestionsAboutQuestions;
      'about-info.info-block': AboutInfoInfoBlock;
      'lacquer-percentage.lacquer-percentage': LacquerPercentageLacquerPercentage;
      'facade-color.facade-color': FacadeColorFacadeColor;
    }
  }
}
