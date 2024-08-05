import type { Schema, Attribute } from '@strapi/strapi';

export interface TotalSizePreferenceTotalSize extends Schema.Component {
  collectionName: 'components_total_size_preference_total_sizes';
  info: {
    displayName: 'PreferenceTotalSize';
  };
  attributes: {
    size: Attribute.String & Attribute.Required & Attribute.DefaultTo<'70*60'>;
    depth: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'540 (Fixed)'>;
  };
}

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

export interface PreferencesPreferences extends Schema.Component {
  collectionName: 'components_preferences_preferences';
  info: {
    displayName: 'Preferences';
  };
  attributes: {
    type: Attribute.Enumeration<['With handle', 'Without Handle', 'Gola']> &
      Attribute.Required;
    totalSize: Attribute.Component<'total-size.preference-total-size'>;
    position: Attribute.Component<'position.total-size'>;
  };
}

export interface PositionTotalSize extends Schema.Component {
  collectionName: 'components_total_size_total_sizes';
  info: {
    displayName: 'PreferencePosition';
    description: '';
  };
  attributes: {
    totalHeight: Attribute.Integer;
    depth: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'540 (Fixed)'>;
    tableCloth: Attribute.Enumeration<['s-12', 's-28', 's-38']> &
      Attribute.Required &
      Attribute.DefaultTo<'s-28'>;
    support: Attribute.Enumeration<['s-60', 's-100', 's-120']> &
      Attribute.Required &
      Attribute.DefaultTo<'s-100'>;
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
    question_one: Attribute.Component<'question.question', true>;
    about_question_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'total-size.preference-total-size': TotalSizePreferenceTotalSize;
      'question.question': QuestionQuestion;
      'preferences.preferences': PreferencesPreferences;
      'position.total-size': PositionTotalSize;
      'facade-preferences.facade-preferences': FacadePreferencesFacadePreferences;
      'about-questions.about-questions': AboutQuestionsAboutQuestions;
      'learn-more-block.learn-more': LearnMoreBlockLearnMore;
      'about-info.info-block': AboutInfoInfoBlock;
    }
  }
}
