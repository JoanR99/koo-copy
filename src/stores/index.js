import { createWithEqualityFn } from 'zustand/traditional';
import { storeUser } from '@/stores/user/storeUser';
import { storeHome } from '@/stores/Screens/storeHome';
import { storeTheme } from '@/stores/Actions/Theme/storeTheme';
import { storeModal } from '@/stores/Actions/modal/storeModal';
import { storeAlert } from '@/stores/Actions/alert/storeAlert';

export const useBoundStore = createWithEqualityFn((...a) => ({
  ...storeUser(...a),
  ...storeTheme(...a),
  ...storeHome(...a),
  ...storeAlert(...a),
  ...storeModal(...a),
}));
