import {createVueInstanceEle} from '../helper/helper';
import MessageModal from './component/message-modal';

export default {

    install(Vue) {
        const $modal = {
            open(component, resolved = {}) {
                if (!component) {
                    throw new Error('Please pass component');
                }

                const ModalEleId = `modal${Date.now()}`;

                const Comp = Vue.extend(component);
                const modalInstance = new Comp({
                    propsData: {
                        ...resolved
                    }
                });

                createVueInstanceEle(ModalEleId);

                modalInstance.$mount(`#${ModalEleId}`);
                modalInstance.visible = true;

                return new Promise((resolve, reject) => {
                    Object.assign(modalInstance, {
                        resolve(data) {
                            resolve(data);
                        },

                        reject() {
                            reject();
                        }
                    });
                });
            },

            openMessageModal(message, confirmText, options = {}) {
                const self = this;
                return self.open(MessageModal, {message, confirmText, options});
            }
        };

        Object.assign(Vue.prototype, {$modal});
    }

};
